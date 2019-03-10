Graph Information Cascades
=============
This project is an experiment of Information Cascades on Graphs according to Networks Crowds and Markets assignement at UBA by Esteban Feuerstein 2018 

# Installation

0) Have Node.js installed at least version 6.0.0 upwards
1) clone this repository
2) Alter index.js as desired (default will run on a randomgraph with connectivity 0.7 )
3) run `node index.js` on the command line


# Experimentacion
Para ver la experimentacion, abrir la jupyter notebook llamada `Experimentacion`
y correr los bloques de codigo con `shift + enter`

# Example Output 

```
BLUE URN
Node : 0 sees blue
Looking at his neighbours sees {}
mantained his decision:  blue
Node 0 decides:  blue 

Node : 1 sees red
Looking at his neighbours sees { blue: 1 }
mantained his decision:  red
Node 1 decides:  red 

Node : 2 sees blue
Looking at his neighbours sees {}
mantained his decision:  blue
Node 2 decides:  blue 

Node : 3 sees red
Looking at his neighbours sees {}
mantained his decision:  red
Node 3 decides:  red 

Node : 4 sees blue
Looking at his neighbours sees {}
mantained his decision:  blue
Node 4 decides:  blue 

Node : 5 sees blue
Looking at his neighbours sees { blue: 2 }
mantained his decision:  blue
Node 5 decides:  blue 

Node : 6 sees red
Looking at his neighbours sees { blue: 2 }
it has been influenced towards:  blue
Node 6 decides:  blue 

Node : 7 sees blue
Looking at his neighbours sees { blue: 2, red: 1 }
mantained his decision:  blue
Node 7 decides:  blue 

Node : 8 sees red
Looking at his neighbours sees { blue: 3 }
it has been influenced towards:  blue
Node 8 decides:  blue 

Node : 9 sees blue
Looking at his neighbours sees { red: 2, blue: 2 }
mantained his decision:  blue
Node 9 decides:  blue 

Node : 10 sees blue
Looking at his neighbours sees { blue: 3 }
mantained his decision:  blue
Node 10 decides:  blue 

Node : 11 sees red
Looking at his neighbours sees { blue: 3, red: 1 }
it has been influenced towards:  blue
Node 11 decides:  blue 

Node : 12 sees blue
Looking at his neighbours sees { blue: 4 }
mantained his decision:  blue
Node 12 decides:  blue 

Node : 13 sees blue
Looking at his neighbours sees { blue: 4, red: 1 }
mantained his decision:  blue
Node 13 decides:  blue 

Node : 14 sees red
Looking at his neighbours sees { blue: 4, red: 1 }
it has been influenced towards:  blue
Node 14 decides:  blue 

Node : 15 sees red
Looking at his neighbours sees { blue: 4 }
it has been influenced towards:  blue
Node 15 decides:  blue 

Node : 16 sees blue
Looking at his neighbours sees { blue: 7 }
mantained his decision:  blue
Node 16 decides:  blue 

Node : 17 sees red
Looking at his neighbours sees { blue: 8 }
it has been influenced towards:  blue
Node 17 decides:  blue 

Node : 18 sees red
Looking at his neighbours sees { blue: 3 }
it has been influenced towards:  blue
Node 18 decides:  blue 

Node : 19 sees blue
Looking at his neighbours sees { blue: 4 }
mantained his decision:  blue
Node 19 decides:  blue 

Node : 20 sees blue
Looking at his neighbours sees { blue: 6 }
mantained his decision:  blue
Node 20 decides:  blue 

Node : 21 sees blue
Looking at his neighbours sees { blue: 7, red: 1 }
mantained his decision:  blue
Node 21 decides:  blue 

Node : 22 sees red
Looking at his neighbours sees { blue: 6, red: 2 }
it has been influenced towards:  blue
Node 22 decides:  blue 

Node : 23 sees blue
Looking at his neighbours sees { blue: 1 }
mantained his decision:  blue
Node 23 decides:  blue 

Node : 24 sees blue
Looking at his neighbours sees { blue: 10, red: 1 }
mantained his decision:  blue
Node 24 decides:  blue 

Node : 25 sees red
Looking at his neighbours sees { blue: 7 }
it has been influenced towards:  blue
Node 25 decides:  blue 

Node : 26 sees blue
Looking at his neighbours sees { red: 1, blue: 6 }
mantained his decision:  blue
Node 26 decides:  blue 

Node : 27 sees blue
Looking at his neighbours sees { blue: 9 }
mantained his decision:  blue
Node 27 decides:  blue 

Node : 28 sees blue
Looking at his neighbours sees { blue: 2 }
mantained his decision:  blue
Node 28 decides:  blue 

Node : 29 sees blue
Looking at his neighbours sees { blue: 6 }
mantained his decision:  blue
Node 29 decides:  blue 

Node : 30 sees red
Looking at his neighbours sees { red: 1, blue: 7 }
it has been influenced towards:  blue
Node 30 decides:  blue 

Node : 31 sees blue
Looking at his neighbours sees { red: 1, blue: 6 }
mantained his decision:  blue
Node 31 decides:  blue 

Node : 32 sees blue
Looking at his neighbours sees { blue: 4, red: 1 }
mantained his decision:  blue
Node 32 decides:  blue 

Node : 33 sees blue
Looking at his neighbours sees { blue: 8 }
mantained his decision:  blue
Node 33 decides:  blue 

Node : 34 sees red
Looking at his neighbours sees { blue: 8 }
it has been influenced towards:  blue
Node 34 decides:  blue 

Node : 35 sees red
Looking at his neighbours sees { blue: 14 }
it has been influenced towards:  blue
Node 35 decides:  blue 

Node : 36 sees blue
Looking at his neighbours sees { blue: 11, red: 1 }
mantained his decision:  blue
Node 36 decides:  blue 

Node : 37 sees blue
Looking at his neighbours sees { blue: 11 }
mantained his decision:  blue
Node 37 decides:  blue 

Node : 38 sees blue
Looking at his neighbours sees { blue: 11 }
mantained his decision:  blue
Node 38 decides:  blue 

Node : 39 sees blue
Looking at his neighbours sees { blue: 11, red: 1 }
mantained his decision:  blue
Node 39 decides:  blue 

Node : 40 sees blue
Looking at his neighbours sees { blue: 13 }
mantained his decision:  blue
Node 40 decides:  blue 

Node : 41 sees red
Looking at his neighbours sees { red: 1, blue: 16 }
it has been influenced towards:  blue
Node 41 decides:  blue 

Node : 42 sees blue
Looking at his neighbours sees { red: 1, blue: 12 }
mantained his decision:  blue
Node 42 decides:  blue 

Node : 43 sees blue
Looking at his neighbours sees { blue: 8, red: 2 }
mantained his decision:  blue
Node 43 decides:  blue 

Node : 44 sees blue
Looking at his neighbours sees { blue: 8 }
mantained his decision:  blue
Node 44 decides:  blue 

Node : 45 sees blue
Looking at his neighbours sees { blue: 14 }
mantained his decision:  blue
Node 45 decides:  blue 

Node : 46 sees blue
Looking at his neighbours sees { red: 1, blue: 17 }
mantained his decision:  blue
Node 46 decides:  blue 

Node : 47 sees blue
Looking at his neighbours sees { blue: 15, red: 2 }
mantained his decision:  blue
Node 47 decides:  blue 

Node : 48 sees blue
Looking at his neighbours sees { red: 1, blue: 11 }
mantained his decision:  blue
Node 48 decides:  blue 

Node : 49 sees blue
Looking at his neighbours sees { blue: 12 }
mantained his decision:  blue
Node 49 decides:  blue 

********* Statistics Summary ********* 


Influencing indexes for node 0 :  []
Influencing indexes for node 1 :  [ 0 ]
Influencing indexes for node 2 :  []
Influencing indexes for node 3 :  []
Influencing indexes for node 4 :  []
Influencing indexes for node 5 :  [ 2, 4 ]
Influencing indexes for node 6 :  [ 4, 5 ]
Influencing indexes for node 7 :  [ 0, 1, 6 ]
Influencing indexes for node 8 :  [ 0, 2, 5 ]
Influencing indexes for node 9 :  [ 1, 2, 3, 4 ]
Influencing indexes for node 10 :  [ 4, 8, 9 ]
Influencing indexes for node 11 :  [ 0, 1, 4, 7 ]
Influencing indexes for node 12 :  [ 0, 8, 10, 11 ]
Influencing indexes for node 13 :  [ 2, 3, 4, 5, 12 ]
Influencing indexes for node 14 :  [ 0, 1, 2, 6, 7 ]
Influencing indexes for node 15 :  [ 4, 5, 9, 13 ]
Influencing indexes for node 16 :  [ 0, 4, 7, 8, 11, 12, 15 ]
Influencing indexes for node 17 :  [ 2, 4, 6, 7, 9, 10, 15, 16 ]
Influencing indexes for node 18 :  [ 8, 10, 12 ]
Influencing indexes for node 19 :  [ 4, 12, 16, 17 ]
Influencing indexes for node 20 :  [ 4, 10, 11, 13, 15, 17 ]
Influencing indexes for node 21 :  [ 0, 2, 3, 4, 11, 12, 13, 14 ]
Influencing indexes for node 22 :  [ 0, 1, 3, 4, 7, 11, 19, 20 ]
Influencing indexes for node 23 :  [ 2 ]
Influencing indexes for node 24 :  [ 0, 1, 2, 7, 8, 10, 15, 16, 19, 20, 22 ]
Influencing indexes for node 25 :  [ 2, 6, 13, 15, 18, 19, 22 ]
Influencing indexes for node 26 :  [ 3, 4, 5, 11, 12, 23, 25 ]
Influencing indexes for node 27 :  [ 4, 10, 14, 15, 16, 20, 21, 22, 23 ]
Influencing indexes for node 28 :  [ 5, 11 ]
Influencing indexes for node 29 :  [ 2, 6, 8, 10, 14, 22 ]
Influencing indexes for node 30 :  [ 1, 6, 7, 8, 18, 20, 21, 27 ]
Influencing indexes for node 31 :  [ 1, 5, 12, 18, 20, 23, 29 ]
Influencing indexes for node 32 :  [ 2, 3, 13, 19, 25 ]
Influencing indexes for node 33 :  [ 4, 6, 12, 18, 19, 22, 27, 31 ]
Influencing indexes for node 34 :  [ 6, 8, 11, 18, 19, 20, 24, 30 ]
Influencing indexes for node 35 :  [ 2, 4, 6, 9, 11, 12, 13, 15, 16, 17, 22, 28, 29, 33 ]
Influencing indexes for node 36 :  [ 0, 3, 4, 5, 6, 7, 13, 17, 20, 21, 28, 34 ]
Influencing indexes for node 37 :  [ 0, 6, 10, 12, 13, 15, 19, 20, 21, 30, 36 ]
Influencing indexes for node 38 :  [ 0, 4, 8, 9, 10, 11, 16, 17, 20, 24, 33 ]
Influencing indexes for node 39 :  [ 0, 1, 5, 12, 14, 23, 26, 27, 29, 31, 33, 37 ]
Influencing indexes for node 40 :  [ 2, 6, 15, 16, 17, 18, 19, 20, 22, 27, 28, 33, 36 ]
Influencing indexes for node 41 :  [ 1, 2, 5, 7, 13, 18, 19, 21, 23, 25, 27, 28, 30, 32, 33, 34, 38 ]
Influencing indexes for node 42 :  [ 1, 2, 7, 9, 19, 22, 23, 24, 26, 29, 34, 36, 40 ]
Influencing indexes for node 43 :  [ 0, 1, 2, 3, 6, 17, 20, 30, 34, 39 ]
Influencing indexes for node 44 :  [ 5, 18, 19, 21, 34, 39, 41, 42 ]
Influencing indexes for node 45 :  [ 4, 6, 7, 11, 17, 18, 20, 21, 24, 27, 36, 38, 41, 44 ]
Influencing indexes for node 46 :  [ 1, 2, 7, 8, 11, 12, 15, 20, 21, 24, 25, 27, 28, 29, 32, 36, 39, 40 ]
Influencing indexes for node 47 :  [ 0, 1, 3, 4, 5, 6, 16, 21, 25, 28, 29, 30, 37, 38, 39, 40, 45 ]
Influencing indexes for node 48 :  [ 1, 2, 5, 8, 10, 14, 28, 31, 34, 40, 42, 43 ]
Influencing indexes for node 49 :  [ 2, 4, 8, 9, 25, 27, 30, 36, 37, 39, 43, 45 ]

Number of nodes whose opinion didnt matter:  44
Number of nodes who changed opinion towards the crowd:  13

```