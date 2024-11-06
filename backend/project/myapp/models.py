# myapp/models.py
from django.db import models

class Dummy(models.Model):
    # Assuming the table has an id and a name column
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    class Meta:
        db_table = 'dummy'  # Specify the exact table name if different