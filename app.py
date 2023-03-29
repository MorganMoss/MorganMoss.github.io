from flask import Flask, request
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

account_sid = "AC6f9903abcc9961d91f10b33509cdd4a1"
auth_token = "d016569abbe3c57f17b6387deca3deb4"
client = Client(account_sid, auth_token)

GOOD_BOY_URL = (
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1"
    "&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)


@app.route("/whatsapp", methods=["GET", "POST"])
def reply_whatsapp():

    try:
        num_media = int(request.values.get("NumMedia"))
    except (ValueError, TypeError):
        return "Invalid request: invalid or missing NumMedia parameter", 400
    response = MessagingResponse()
    if not num_media:
        msg = response.message("Send us an image!")
    else:
        msg = response.message("Thanks for the image. Here's one for you!")
        msg.media(GOOD_BOY_URL)
    return str(response)


@app.route("/", methods=["GET"])
def root():
    return "Hello World"


if __name__ == "__main__":
    app.run(port=50000)

# message = client.messages.create(
#     from_='whatsapp:+14155238886',
#     body='Hello, there!',
#     to='whatsapp:+27718691665'
# )

# print(message.body)

# account_sid = "AC6f9903abcc9961d91f10b33509cdd4a1"
# auth_token = "d016569abbe3c57f17b6387deca3deb4"
# client = Client(account_sid, auth_token)

# message = client.messages \
#     .create(
#         body="Here's that picture of an owl you requested.",
#         media_url=['https://demo.twilio.com/owl.png'],
#         from_='whatsapp:+14155238886',
#         to='whatsapp:+27718691665'
#     )

# print(message.body)
