from re import template
from flask import Flask, render_template
import random
import os

img_folder = os.path.join("static", )

UPLOAD_FOLDER = 'static/'
app = Flask(__name__, static_folder="static", template_folder="templates")


@app.route('/', methods=["GET", "POST"])
def demo_photo():
    demo_images = {1 : '/static/images/Demoplate_1_Samuel.jpg', 2 : '/static/images/Demoplate_2_Samuel.jpg', 3 : '/static/images/Demoplate_3_Samuel.jpg'}
    full_filename = demo_images[random.randint(1, 3)]
    return render_template("display.html", user_image=full_filename)

	# hold = save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
	# #print('upload_image filename: ' + filename)
	# flash('Image successfully uploaded and displayed below')
	# return render_template('upload.html', filename=filename)