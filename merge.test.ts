
import { merge } from './merge'

test('merge [] + [] to equal []', () => {
  expect(merge([],[])).toEqual([]);
});

test('merge [] + [5] to equal [5]', () => {
  expect(merge([],[5])).toEqual([5]);
});

test('merge [10] + [] to equal [10]', () => {
  expect(merge([10],[])).toEqual([10]);
});

test('merge [1,2] + [3,4] to equal [1,2,3,4]', () => {
  expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
});

test('merge [3,4,5] + [1,2] to equal [1,2,3,4,5]', () => {
  expect(merge([3,4,5],[1,2])).toEqual([1,2,3,4,5]);
});

test('merge [1,1,2] + [2,7] to equal [1,1,2,2,7]', () => {
  expect(merge([1,1,2],[2,7])).toEqual([1,1,2,2,7]);
});

test('merge [10,20,100] + [1000,7000] to equal [10,20,100,1000,7000]', () => {
  expect(merge([10,20,100],[1000,7000])).toEqual([10,20,100,1000,7000]);
});

test('merge [300,700,1000] + [900,5000] to equal [300,700,900,1000,5000]', () => {
  expect(merge([300,700,1000],[900,5000])).toEqual([300,700,900,1000,5000]);
});

test('merge [1,1,1] + [1,1] to equal [1,1,1,1,1]', () => {
  expect(merge([1,1,1],[1,1])).toEqual([1,1,1,1,1]);
});