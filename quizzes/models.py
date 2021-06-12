from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=250)
    point = models.PositiveSmallIntegerField()
    answers = models.ManyToManyField('Answer')

    def __str__(self):
        return self.question


class Answer(models.Model):
    answer = models.CharField(max_length=250)
    correct_answer = models.BooleanField(default=False)

    def __str__(self):
        return self.answer
