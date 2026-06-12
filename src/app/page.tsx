// import Image from "next/image";;
import HomeSide from "@/components/home/home"

export default function Home() {
  return (
    <div className="h-full flex flex-col align-center justify-center">
      <div className="lg:hidden flex flex-col pt-[67px] h-full w-full items-center">
        <HomeSide view={true}/>
      </div>
    </div>
  )
}
