from django.contrib import admin
from django.urls import path, include

from quizzes import views

urlpatterns = [
    path('api/v1/quizzes/', views.question_list),
    path('api/v1/quizzes/random/', views.random_question_list),
    path('api/v1/quizzes/<int:pk>', views.single_question),
    path('admin/', admin.site.urls),
]
