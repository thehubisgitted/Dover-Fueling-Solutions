from mockPythonValue import token, f
from cryptography.fernet import Fernet

print(f.decrypt(token))
data = f.decrypt(token).decode()
print(data)