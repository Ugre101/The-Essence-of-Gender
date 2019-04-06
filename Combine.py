import os.path


#import re
#def removeComments(string):
#    string = re.sub(re.compile(r"/\*.*?\*/",re.DOTALL ) ,"" ,string) # remove all occurance streamed comments (/*COMMENT */) from string
#    string = re.sub(re.compile(r"//.*?\n" ) ,"" ,string) # remove all occurance singleline comments (//COMMENT\n ) from string
#    return string

# Pull all javascript into one to avoid loadorder isues
g = open("Gamescript.js", "r",encoding="utf-8")
w = open("Combined.js", "w",encoding="utf-8")
f = os.listdir("JavaScript")
with w as outfile:
    with g as infile:
        for line in infile:
            #striped = removeComments(line)
            outfile.write(line)
        outfile.write("\n")#Add newline to end of script to avoid overwritting
    infile.close()
    for file in f:
        if file.endswith(".js"):
            with open("JavaScript/"+file,encoding="utf-8") as infile:
                for line in infile:
                    #striped = removeComments(line)
                    outfile.write(line)
                outfile.write("\n")
            infile.close()
        elif os.path.isdir("JavaScript/"+file):#if dir open it and search for more js files
            name = "JavaScript/"+ file +"/" 
            r = os.listdir("JavaScript/"+file)
            for file in r:
                if file.endswith(".js"):
                    with open(name +file,encoding="utf-8") as infile:
                        for line in infile:
                            #striped = removeComments(line)
                            outfile.write(line)
                        outfile.write("\n")
                    infile.close()
outfile.close()




