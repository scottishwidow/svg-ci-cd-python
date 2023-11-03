import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler
Hostname = '127.0.0.1'

import os
os.chdir('./html')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://{Hostname}:{PORT}")
    httpd.serve_forever()


