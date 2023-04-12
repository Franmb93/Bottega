import mysql.connector
from faker import Faker
import random

# Connect to the database
conn = mysql.connector.connect(
    host="localhost",
    port=3306,
    database="devcamp",
    user="root",
    password="fran"
)

cursor = conn.cursor()

# Create a Faker object
fake = Faker()

# Create a user with username 'corhlius' and password '123123'
cursor.execute("INSERT INTO user (id, username, password) VALUES (%s, %s, %s)", ('1', 'corhlius', '123123'))

# Create 9 more random users
for i in range(2, 11):
    username = fake.user_name()
    password = fake.password()
    cursor.execute("INSERT INTO user (id, username, password) VALUES (%s, %s, %s)", (str(i), username, password))

# Create 3 rooms
room_names = ['Room A', 'Room B', 'Room C']
for i in range(1, 4):
    cursor.execute("INSERT INTO room (id, name, description) VALUES (%s, %s, %s)", (str(i), room_names[i-1], fake.text()))

# Add users to rooms randomly
for i in range(1, 11):
    user_rooms = random.sample(range(1, 4), 2)
    for room_id in user_rooms:
        cursor.execute("INSERT INTO user_room (user_id, room_id) VALUES (%s, %s)", (str(i), str(room_id)))

# Get the list of existing users and rooms
cursor.execute("SELECT id FROM user")
user_ids = [str(row[0]) for row in cursor.fetchall()]

cursor.execute("SELECT id FROM room")
room_ids = [str(row[0]) for row in cursor.fetchall()]

# Create messages associated with existing users and rooms
for i in range(1, 21):
    username = fake.user_name()
    content = fake.text()
    timestamp = fake.date_time_between(start_date='-1y', end_date='now')
    user_id = random.choice(user_ids)
    room_id = random.choice(room_ids)
    cursor.execute("INSERT INTO message (id, username, timestamp, content, user_id, room_id) VALUES (%s, %s, %s, %s, %s, %s)", (str(i), username, timestamp, content, user_id, room_id))

# Commit the changes and close the connection
conn.commit()
cursor.close()
conn.close()

print("Finished...")
