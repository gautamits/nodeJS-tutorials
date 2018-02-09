from socket import *
import thread
def server(connection):
    connection.send('HTTP/1.0 200 OK\n')
    connection.send('Content-Type: text/html\n')
    connection.send("""
        <html>
        <body>
        <h1>Hello World</h1> this is my server!
        </body>
        </html>
    """)
    connection.sendall()
    connection.close()
port=8000
mysock=socket(AF_INET,SOCK_STREAM)
mysock.bind(('127.0.0.1',port))
mysock.listen(1000)
while True:
    conn,addr = mysock.accept()
    thread.start_new_thread(server,(conn,))
