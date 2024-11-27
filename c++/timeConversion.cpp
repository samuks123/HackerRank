#include <bits/stdc++.h>

using namespace std;

string timeConversion(string s) {
    
    if(s[8] == 'P'){
        if(s[0] == '1' && s[1] == '2'){
            s.erase(8);
            s.erase(8);
            
            return s;
        }
        s[0] += 1;
        s[1] += 2;
        s.erase(8);
        s.erase(8);
    }
    else if(s[8] == 'A' && s[0] == '1' && s[1] == '2'){
        s[0] = '0';
        s[1] = '0';
        s.erase(8);
        s.erase(8);
    }
    else if(s[8] == 'A'){
        s.erase(8);
        s.erase(8);
    }
        
    return s;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = timeConversion(s);

    fout << result << "\n";

    fout.close();

    return 0;
}