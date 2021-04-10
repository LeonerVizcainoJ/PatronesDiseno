#Patron de Diseno Singleton con Decorator
def singleton(cls):

    instances = dict()

    def wrap(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)

        return instances[cls]
    
    return wrap

@singleton
class User(object):
    def __init__(self, usarname):
        self.username = usarname

@singleton
class Admin():
    pass

if __name__ == '__main__':

    user1 = User('Leoner')
    user2 = User('Eduardo')

    admin1 = Admin()
    admin2 = Admin()

    print(user1 is user2)
    print(admin1 is admin2)