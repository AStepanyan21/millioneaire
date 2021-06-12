from rest_framework import generics
from rest_framework.generics import RetrieveAPIView

from quizzes.models import Question
from quizzes.serializers import QuestionSerializer


class QuestionList(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


question_list = QuestionList.as_view()


class SingleQuestionView(RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


single_question = SingleQuestionView.as_view()


