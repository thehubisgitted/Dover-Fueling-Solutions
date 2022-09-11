from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes, OperationStatusCodes
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

demo_image = {
    1 : "python-docker/static/images/Demoplate_1_Samuel.jpg", 
    2 : "python-docker/static/image/Demoplate_2_Samuel.jpg",
    3 : "python-docker/static/image/Demoplate_3_Samuel.jpg",
    4 : "python-docker/static/image/Demoplate_1_Alex.jpg",
    5 : "python-docker/static/image/Demoplate_2_Alex.jpg",
    6 : "python-docker/static/image/Demoplate_1_Colby.jpg",
    7 : "python-docker/static/image/Demoplate_2_Colby.jpg"}
raw = True
numberOfCharsInOperationId = 36

select_demo = demo_image[random.randint(1,3)]

image_data = open(select_demo, "rb").read()
headers = {'Ocp-Apim-Subscription-Key': key, "Content-Type": 'application/octet-stream'}
response = requests.post("https://rohith-hero-day.cognitiveservices.azure.com/" + "vision/v3.1/ocr", headers=headers, data=image_data)

print(response.json())
# with open(demo_image, "rb") as image:
#   f = image.read()
#   b = bytearray(f)
#   print(b[0])

# recognize_handw_results = client.read_in_stream(image_data, raw=True)


# print(recognize_handw_results)
# # rawHttpResponse = client.read_in_stream(demo_image, language="en", raw=True)

# # Get ID from returned headers
# operationLocation = recognize_handw_results.headers["Operation-Location"]
# # rawHttpResponse.headers["Operation-Location"]
# idLocation = len(operationLocation) - numberOfCharsInOperationId
# operationId = operationLocation[idLocation:]

# # SDK call
# result = client.get_read_result(operationId)

# print(result.status)
# # Get data
# if result.status == OperationStatusCodes.succeeded:
#     print("PASS! HOORAY!")
#     for line in result.analyze_result.read_results[0].lines:
#         print(line.text)
#         print(line.bounding_box)