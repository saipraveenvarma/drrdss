# myapp/views.py
from django.http import JsonResponse
from .models import Dummy

def get_dummy_data(request):
    # Retrieve all records from the dummy table
    data = Dummy.objects.all().values()  # Use .values() to get a dictionary-like object
    data_list = list(data)  # Convert to a list of dictionaries
    return JsonResponse(data_list, safe=False)  # Return data as JSON