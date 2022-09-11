from azure.cognitiveservices.vision.computervision import ComputerVisionClient
# from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes, OperationStatusCodes
from msrest.authentication import CognitiveServicesCredentials
import requests
import random

# Author: Samuel D'Avila
# Description :
#   This file is for the developing an Automatic License Plate Recognition
#   software. This is in version 0.1.0 and will not be used in the demo.
#   Can be modified for future use; however use own endpoint and API key.
#   This is found on the Azure platform along with documentation.

# Azure API Key 
key = 'b8dd8da39fdd452aac9ce832ed17e081' # <--- Keep his code private!


# Establishes connection to Azure computer vision servers
credentials = CognitiveServicesCredentials(key)
client = ComputerVisionClient(
    endpoint="https://rohith-hero-day.cognitiveservices.azure.com/",
    credentials=credentials
)

# Following code takes in an image, reads the license plate and the state
#   then prints that json file out. This file has been further modified to 
#   send data into Javascript so it may be encrypted.

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

# Selects random image
select_demo = demo_image[random.randint(1, 3)]
# random.randint(1,7)

# Read random image
image_data = open(select_demo, "rb").read()
headers = {'Ocp-Apim-Subscription-Key': key, "Content-Type": 'application/octet-stream'}
response = requests.post("https://rohith-hero-day.cognitiveservices.azure.com/" + "vision/v3.1/ocr", headers=headers, data=image_data)

print(response.json())
