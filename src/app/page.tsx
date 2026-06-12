// import Image from "next/image";;
import HomeSide from "@/components/home/home"

export default function Home() {
  return (
    <div className="h-full flex flex-col align-center justify-center">
      <div className="lg:hidden flex pt-[60px] h-full w-full items-center justify-center">
        <HomeSide view={true}/>
      </div>
    </div>
  )
}
