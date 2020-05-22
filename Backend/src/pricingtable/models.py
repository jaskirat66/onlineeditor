from django.db import models


class PricingTable(models.Model):
    Pname = models.CharField(max_length=120)
    Price = models.TextField()

    def __str__(self):
        return self.Pname