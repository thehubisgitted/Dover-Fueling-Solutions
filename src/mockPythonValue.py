from cryptography.fernet import Fernet
key = Fernet.generate_key()
f = Fernet(key)
class person:
    state = "California"
    licensenumber = "EATA55"
    
print(person.state+person.licensenumber)

b = bytes(person.state+person.licensenumber, 'utf-8')
token = f.encrypt(b)
print(token)
