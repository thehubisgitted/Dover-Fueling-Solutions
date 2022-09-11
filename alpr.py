from azure.cognitiveservices.vision.computervision import ComputerVisionClient
# from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes, OperationStatusCodes
from msrest.authentication import CognitiveServicesCredentials
import requests
import random

key = 'b8dd8da39fdd452aac9ce832ed17e081' # <--- Keep his code private!


# Note: 
credentials = CognitiveServicesCredentials(key)
client = ComputerVisionClient(
    endpoint="https://rohith-hero-day.cognitiveservices.azure.com/",
    credentials=credentials
)

# ngrok http <port number>

# Images that are too large (4, 5, 6, 7)
demo_image = {
    1 : "python-docker/static/images/Demoplate_1_Samuel.jpg", 
    2 : "python-docker/static/images/Demoplate_2_Samuel.jpg",
    3 : "python-docker/static/images/Demoplate_3_Samuel.jpg",
    4 : "python-docker/static/images/Demoplate_1_Alex.jpg",
    5 : "python-docker/static/images/Demoplate_2_Alex.jpg",
    6 : "python-docker/static/images/Demoplate_1_Colby.jpg",
    7 : "python-docker/static/images/Demoplate_2_Colby.jpg"}
raw = True
numberOfCharsInOperationId = 36

select_demo = demo_image[7]
# random.randint(1,7)


image_data = open(select_demo, "rb").read()
headers = {'Ocp-Apim-Subscription-Key': key, "Content-Type": 'application/octet-stream'}
response = requests.post("https://rohith-hero-day.cognitiveservices.azure.com/" + "vision/v3.1/ocr", headers=headers, data=image_data)

print(response.json())
