# A simple capped array that will never grow
# over a given size
#
# New entries will go to the beginning of the
# array and old ones will fall off the end.
# I specifically wanted this behavior and so
# sacrificed some speed, would be faster to
# append to the array and remove from the
# front.
#
#  >> a = CappedArray.new(10)
#  => [nil, nil, nil, nil, nil, nil, nil, nil, nil, nil]
#  >> 100.times {|i| a << i}
#  => 100
#  >> a
#  => [99, 98, 97, 96, 95, 94, 93, 92, 91, 90]
#
# You probably want to avoid using any of the !
# methods like map!, collect! etc on these arrays
# but I did not remove them in case there's some
# legit need I can't forsee
#
class CappedArray < Array
    alias_method :array_push, :push

    def initialize(cap)
        @cap = cap
        super(cap)
    end

    def <<(val)
        push val
    end

    def push(val)
        pop if length == @cap

        insert(0, val)
    end
end
