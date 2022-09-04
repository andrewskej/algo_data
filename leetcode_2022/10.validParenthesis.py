#given a string containing only parenthesis,
#determine if it is valid (all closed). 

def validP(givenString):
    leftSet = set('([{')
    rightSet = set(')]}')
    
    match = { 
             ")" : "(",
             "]" : "[",
             "}" : "{" 
            }
    
    stack = []

    for bracket in givenString:
        if bracket in leftSet:
            stack.append(bracket)
        if bracket in rightSet:
            if not stack:
                return False
            elif stack.pop() != match[bracket]:
                return False
            else:
                continue
    if not stack:
        return True
    else:
        return False
  



print(validP("({[(]})"))
print(validP("())"))
print(validP("()[{}]()"))
print(validP("()"))
