import { createHandler } from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    // Create a Web API Request from Node.js req
    const url = `https://${req.headers.host}${req.url}`;
    const body = req.method !== 'GET' && req.method !== 'HEAD' 
      ? JSON.stringify(req.body) 
      : undefined;
    
    const webRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body,
    });
    
    // Get the TanStack Start handler
    const handler = await createHandler();
    const response = await handler(webRequest);
    
    // Convert Web API Response to Node.js response
    res.status(response.status);
    
    // Copy headers
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'transfer-encoding') {
        res.setHeader(key, value);
      }
    });
    
    // Handle response body
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(decoder.decode(value, { stream: true }));
      }
      res.end();
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Vercel server function error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
