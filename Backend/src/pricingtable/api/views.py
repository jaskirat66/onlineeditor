from rest_framework.generics import ListAPIView, RetrieveAPIView

from django.urls import reverse

from pricingtable.models import PricingTable

from .serializers import PricingTableSerializer

class PricingTableView(ListAPIView):
    queryset = PricingTable.objects.all()
    serializer_class = PricingTableSerializer

class PricingTableDetailView(RetrieveAPIView):
    queryset = PricingTable.objects.all()
    serializer_class = PricingTableSerializer