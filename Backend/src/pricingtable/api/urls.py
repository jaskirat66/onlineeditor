from django.urls import path

from .views import PricingTableView, PricingTableDetailView


urlpatterns = [
    path('',PricingTableView.as_view()),
    path('<pk>',PricingTableDetailView.as_view())
]