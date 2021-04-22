import http.server
import socket
import socketserver

PORT = 1405
iplan = socket.gethostbyname(socket.gethostname())
handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("Server started at localhost:" + str(PORT))
    print("In local network: {}:{}".format(iplan,PORT))
    httpd.serve_forever()