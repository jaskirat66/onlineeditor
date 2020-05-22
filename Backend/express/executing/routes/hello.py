import sys
sys.stdout = open("for_posterity.txt", "w")
print("hello")
sys.stdout = open("for_posterity.txt", "w")