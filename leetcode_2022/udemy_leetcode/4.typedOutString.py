
string1 = 'ab#z'
string2 = 'az#z'
string3 = 'ab#d'
string4 = 'acc#c'

def typedOutStringBrute(S, T):
    s1 = []
    s2 = []
    isHash = '#'
    
    for i in range(len(S)):
        if S[i] != isHash:
            s1.append(S[i])
        else:
            s1.pop()
    
    for i in range(len(T)):
        if T[i] != isHash:
            s2.append(T[i])
        else:
            s2.pop()
            
    return ''.join(s1) == ''.join(s2)
    
    

print(typedOutStringBrute(string1, string2))
print(typedOutStringBrute(string3, string4))


def typedOutStringOptimal(S, T):
    p1 = len(S) - 1
    p2 = len(T) - 1
    
    while p1 >= 0 or p2 >= 0:
        if S[p1] == "#" or T[p2] == "#":
            if S[p1] == "#":
                backCount = 2
                while backCount > 0:
                    p1 -= 1
                    backCount -= 1
                    if S[p1] == "#":
                        backCount = backCount + 2
                    
            if T[p2] == "#":
                backCount = 2
                while backCount > 0:
                    p2 -= 1
                    backCount -= 1
                    if T[p2] == "#":
                        backCount = backCount + 2
        else:
            if S[p1] != T[p2]:
                return False
            else:
                p1 -= 1
                p2 -= 1

    return True

print(typedOutStringOptimal(string1, string2))
print(typedOutStringOptimal(string3, string4))