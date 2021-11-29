#include <complex.h>
#include <math.h>
#include <stdio.h>

long long powi(long x, unsigned n)
{
    long long  p;
    long long  r;

    p = x;
    r = 1.0;
    while (n > 0)
    {
        if (n % 2 == 1)
            r *= p;
        p *= p;
        n /= 2;
    }

    return(r);
}

complex _pos; 
complex _dir; 
long long _count; 
long long _itersize;

void draw_dragon_a(int n);
void draw_dragon_b(int n);


void draw_dragon_a(int n)
{
    if (n <= 0 || _count <=0)
        return;
    draw_dragon_a(n-1);
    _dir *= -I;
    draw_dragon_b(n-1);
    _pos += _dir;
    --_count;
    _dir *= -I;
    if (_count % _itersize  == 0) 
    {
        printf("%lld %d %d %d\n", 
                _count / _itersize, n, 
                (int)creal(_pos), (int)cimag(_pos));
    }
}

void draw_dragon_b(int n)
{
    if (n <= 0 || _count <=0)
        return;
    _dir *= I;
    _pos += _dir;
    --_count;
    draw_dragon_a(n-1);
    _dir *= I;
    draw_dragon_b(n-1);
    if (_count % _itersize  == 0) 
    {
        printf("%lld %d %d %d\n", 
                _count / _itersize, n, 
                (int)creal(_pos), (int)cimag(_pos));
    }
}

void draw_dragon(char *seq, int n) 
{
    for (;_count > 0; seq++)
    {
        char c = *seq;
        if (c == 0) 
        {
            break;
        }
        else if (c == 'F') 
        {
            _pos += _dir;
            --_count;
            if (_count % _itersize  == 0) 
            {
                printf("%lld %d %d %d\n", 
                    _count / _itersize, n, 
                    (int)creal(_pos), (int)cimag(_pos));
            }
        }
        else if (c == 'R')
        {
            _dir *= -I; 
        }
        else if (c == 'L')
        {
            _dir *= I; 
        }
        else if (n > 0)
        {
            if (c == 'a')
            {
                draw_dragon_a(n-1);
            }
            else if (c == 'b')
            {
                draw_dragon_b(n-1);
            }
        }
    } 
}

void print_dragon_pos(long long count, int n)
{
    _pos = 0;
    _dir = I;
    _count = count;
    _itersize = powi(10,8);
    draw_dragon("Fa",n);
    printf("%d %d\n", (int) creal(_pos), (int) cimag(_pos));
}

void main()
{
    print_dragon_pos(500, 10);
    print_dragon_pos(powi(10,12), 40);
}
