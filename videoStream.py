from turtle import delay
import cv2
import imutils
import pytesseract

# Author: Samuel D'Avila
# Description: 
#   This code is not in use for the demo. This is WIP
#   code that incorporates the Automatic License Plate Recognition
#   (ALPR) python file (alpr.py).

# Establish connection to internal camera
vid = cv2.VideoCapture(0)
  
while(True):
      
    # Capture the video frame
    # by frame
    ret, frame = vid.read()
  
    # Display the resulting frame
    cv2.imshow('frame', frame)

    # cv2.imwrite('PlateDetection.jpg', frame)
    
    # the 'q' button is set as the
    # quitting button you may use any
    # desired button of your choice
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
  
# After the loop release the cap object
vid.release()
# Destroy all the windows
cv2.destroyAllWindows()