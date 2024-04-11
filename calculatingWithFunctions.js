export function zero() { return value(arguments, 0); }
export function one() { return value(arguments, 1); }
export function two() { return value(arguments, 2); }
export function three() { return value(arguments, 3); }
export function four() { return value(arguments, 4); }
export function five() { return value(arguments, 5); }
export function six() { return value(arguments, 6); }
export function seven() { return value(arguments, 7); }
export function eight() { return value(arguments, 8); }
export function nine() { return value(arguments, 9); }

export function plus() { return x => x + arguments[0] }
export function minus() { return x => x - arguments[0] }
export function times() { return x => x * arguments[0] }
export function dividedBy() { return x => Math.floor(x / arguments[0]) }

function value(args, val) {
    if (args.length == 0) return val; else return args[0](val);
}
