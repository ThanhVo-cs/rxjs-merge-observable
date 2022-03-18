import './style.css';

import {
  of,
  map,
  Observable,
  interval,
  merge,
  pipe,
  take,
  fromEvent,
} from 'rxjs';

// tạo observable
const ob = interval(1000).pipe(
  take(10) // chạy 10 lần
);

const observer = {
  next(res) {
    console.log(res);
  },
  // error(err){
  //   console.error(err);
  // },
  complete() {
    console.log('completed');
  },
};

// sự kiện clicks
const clicks = fromEvent(document, 'click').pipe(take(5));

// merge 2 sự kiện click và ob (có thể merge nhiều observable) => nhiều thèn chạy đồng thời
// tham số 1 có nghĩa là thèn click sẽ thực hiện trước rồi mới tới ob, nếu không truyền thì 2 thèn sẽ chạy đồng thời
// clicks chạy 5 lần xong thì thèn ob mới chạy 10 lần
const subscription = merge(clicks, ob, 1).subscribe(observer);
