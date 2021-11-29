# lets talk about bitshifting

LDI = 0b10000010

bob = LDI >> 6
bob == 0b00000010
add_to_pc = bob + 1

FETCH
IR = 0b10000010

DECODE
add_to_pc = (IR >> 6) + 1

if IR == LDI:
    # do the ldi thing
elif IR == ADD:
    #do the add thing

cpu.pc += add_to_pc
