# COMDAT samba
## (COMBO DATA)
Reverse engineering the "DEAD OR ALIVE" COMDAT File Format (character.bin)


# Header data

Address	|	Length	|	Description	|
-----	|	-----	|	-----	|
0x00	|	0x04	|	MOVE-DEFINITIONS	|
0x04	|	0x04	|	INPUT-DEFINITONS OFFSET TABLE	|
0x08	|	0x04	|	MOVE PROPERTIES (NORMAL,COUNTER,GUARD,CROUCHING,AIR, DAMAGE, FRAME DATA,OPEN/CLOSED STANCE)	|
0x0c	|	0x04	|	Holds Definitions (which move-def slot to use for each hold)	|
0x10	|	0x04	|	???	|
0x14	|	0x04	|	THROWS?	|
0x18	|	0x04	|	Throw Positioning / damage pointers	|
0x1c	|	0x04	|	Hold positioning / damage pointers	|
0x20	|	0x04	|	Character-Specific Property Definitions	|
0x24	|	0x04	|		|
0x28	|	0x04	|		|
0x2c	|	0x04	|		|
0x30	|	0x04	|		|
0x34	|	0x04	|	???	|
0x38	|	0x04	|	???	|
0x3c	|	0x04	|	???	|
0x40	|	0x04	|	???	|
0x44	|	0x04	|	???	|
0x48	|	0x04	|	???	|
0x4c	|	0x04	|	???	|
0x50	|	0x04	|	???	|
0x54	|	0x04	|	Anim-Def Pointer Table	|
0x58	|	0x04	|	PADDING	|
0x5c	|	0x04	|	???	|
0x60	|	0x04	|	???	|
0x64	|	0x04	|	???	|
0x68	|	0x04	|	???	|
0x6c	|	0x04	|	???	|
0x70	|	0x04	|	???	|
0x74	|	0x04	|	???	|
0x78	|	0x04	|	???	|
0x7c	|	0x04	|	???	|
0x80	|	0x04	|	???	|
0x84	|	0x04	|	“CONSOLE HOLDS”	|
