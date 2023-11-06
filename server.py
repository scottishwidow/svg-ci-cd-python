import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler
Hostname = '127.0.0.1'

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

import os
os.chdir('./html')

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Serving at http://{Hostname}:{PORT}")
    httpd.serve_forever()
