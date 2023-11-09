import database

class User:
	def get(self, username):
		db = database.get_db()
		cursor = db.cursor()
		cursor.execute(f"select * from User where username == {username} limit 1")
		user = cursor.fetchall()
		db.close()

		return user

	def is_authenticated(self):
		return True

	def is_active(self):
		return True

	def is_anonymous(self):
		return False