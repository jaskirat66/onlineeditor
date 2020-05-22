from rest_framework import serializers

from pricingtable.models import PricingTable

class PricingTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = PricingTable
        fields = ('Pname', 'Price')