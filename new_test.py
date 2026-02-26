# server.py
import time

print("Server starting...")
time.sleep(1)
print("Server running!")
time.sleep(4)
raise Exception("FAAAH! Something broke!")