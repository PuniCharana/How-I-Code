```python
# Find 3 or more consecutive characters in a string
s = "abcdefaaaaaaaaaaaaabbbccccccccccccccccdefhhhaaaaaabbbbbbbbbbbb"
m = [(x.start(),x.end()) for x in re.finditer(r'((\w)\2{2,})', s)]
print(m)
# Find max differnce
res = max(m, key = lambda sub: sub[1] - sub[0])
print(res)

# OUTPUT
[(6, 19), (19, 22), (22, 38), (41, 44), (44, 50), (50, 62)]                                                                            
(22, 38) 
```

https://stackoverflow.com/a/7147979
