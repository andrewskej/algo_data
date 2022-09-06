def minBracket(givenString):
    givenStringInArr =list(givenString) 
    stack = []

    for idx, letter in enumerate(givenStringInArr):
        if letter == "(":
            stack.append(idx)
        elif letter == ")" and len(stack) > 0:
            stack.pop()
        elif letter == ")":
            givenStringInArr[idx] = ""


    while len(stack) > 0:
        currIdx = stack.pop()
        givenStringInArr[currIdx] = ""

    return "".join(givenStringInArr)

print(minBracket("a)bc(d)"))
print(minBracket("(ab(c)d"))
print(minBracket("))(("))
