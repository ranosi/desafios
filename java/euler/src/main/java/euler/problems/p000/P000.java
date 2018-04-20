package euler.problems.p000;

import java.util.List;

import euler.problems.Problem;

public class P000 implements Problem {
	
	@Override
	public String solve(List<String> input) {
		return Integer.toString(input.stream().mapToInt(Integer::parseInt).sum());
	}
}
