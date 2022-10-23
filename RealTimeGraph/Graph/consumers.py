from channels.generic.websocket import WebsocketConsumer


class GraphConsumer(WebsocketConsumer):
    def connect(self):
