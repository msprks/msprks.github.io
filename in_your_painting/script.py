import spacy
nlp = spacy.load('en_core_web_sm')

balthuspatterns = open('balthus_patterns_unsorted.txt').read()
words = balthuspatterns.split(' ')
# print (words)

doc = nlp(balthuspatterns)

nouns = [item.text for item in doc if item.pos_ == 'NOUN']
adjectives = [item.text for item in doc if item.pos_ == 'ADJ']
verbs = [item.text for item in doc if item.pos_ == 'VERB']
adverbs = [item.text for item in doc if item.pos_ == 'ADV']
verbsvbg = [item.text for item in doc if item.tag_ == 'VBG']
verbsvb = [item.text for item in doc if item.tag_ == 'VB']
verbsvbz = [item.text for item in doc if item.tag_ == 'VBZ']
adjectivesjj = [item.text for item in doc if item.tag_ == 'JJ']
nounsnn = [item.text for item in doc if item.tag_ == 'NN']
adverbsrb = [item.text for item in doc if item.tag_ == 'RB']

print(verbsvb)
