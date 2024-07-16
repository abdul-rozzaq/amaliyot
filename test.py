
class Car:
    def __init__(self, brand, model, color, year):
        self.brand = brand
        self.model = model
        self.color = color
        self.year = year
        
    def start(self):
        print(f"{self.brand} {self.model} started")
        
        

class BMW(Car):

    def __init__(self, model, color, year):
        super().__init__('BMW', model, color, year)
       
 

class Mercedes(Car):

    def __init__(self, model, color, year):
        super().__init__('Mercedes', model, color, year)
       
        
cs = BMW('M3', 'black', 2023)
mr = Mercedes('G63', 'black', 2024)

cs.start()
mr.start()