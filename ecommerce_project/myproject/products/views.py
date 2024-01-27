from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def products(request):
    return render(request, 'products.html')

def faq(request):
    return render(request, 'faq.html')

def contact(request):
    return render(request, 'contact.html')