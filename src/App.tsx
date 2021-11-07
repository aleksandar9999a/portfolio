import ExF, { Element } from 'exf-ts/lib/element';
import Service from './service';

export default (element: Element, dep: { service: () => Promise<Service>}) => {
  const counter = element.observe(0)

  const interval = setInterval(() => {
    counter.value++
  }, 1000)

  element.onUnmount(() => {
    clearInterval(interval)
  })

  return () => {
    return (
      <div className="bg-red">
        <div>{counter}</div>
      </div>
    )
  }
}
