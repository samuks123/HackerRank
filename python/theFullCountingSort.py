#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

def countSort(arr):
    
    size = len(arr)
    
    maximo = int(max(arr)[0])
    aux = [[] for _ in range(maximo + 1)]
    it = 0
        
    for i in arr:
        if it >= size / 2:
            aux[int(i[0])].append(i[1])
        else:
            aux[int(i[0])].append('-')
        it += 1
        
    output = []
    for sublist in aux:
        output.append(' '.join(sublist))
    
    # Join all sublist outputs with a space and print without leading space
    print(' '.join(output).strip())

if __name__ == '__main__':
    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(input().rstrip().split())

    countSort(arr)