from flask import Flask, Response  # Testing
# Testing
app = Flask(__name__)  # Testing
# Testing
HOST = '127.0.0.1'  # Testing
PORT = 3000  # Testing
# Testing
@app.route('/', defaults={'path': ''}, methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'])  # Testing
@app.route('/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'])  # Testing
def catch_all(path):  # Testing
    return Response('Hello, World!\n', status=200, content_type='text/plain')  # Testing
# Testing
if __name__ == '__main__':  # Testing
    print(f'Server running at http://{HOST}:{PORT}/')  # Testing
    app.run(host=HOST, port=PORT)  # Testing
