import { Check } from "lucide-react";
import thanksImage from "@/assets/thanks.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Form({ schedule, formattedDate }) {
  const [name, setName] = useState("");
  const [kana, setKana] = useState("");
  const [email, setEmail] = useState("");
  const [sheetCount, setSheetCount] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 送るデータを整形
    const formData = {
      formattedDate,
      sheetCount,
      name,
      kana,
      email,
    };
    console.log("送信データ:", formData);

    try {
      const res = await fetch("http://localhost:3000/form", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status, res.statusText);

      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="c-reserve-button">TICKET</DialogTrigger>
      <DialogContent>
        {success ? (
          <div className="text-center">
            <span className="u-bg-blue rounded-full w-10 h-10 inline-flex items-center justify-center">
              <Check size={24} color="white" />
            </span>
            <p>予約完了</p>
            <p>ご予約いただきありがとうございます 予約完了のメールを送信いたしましたのでご確認ください</p>
            <img src={thanksImage.src} alt="" />
            <DialogClose className="c-button">ライブ詳細に戻る</DialogClose>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <dl>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">公演名</dt>
                <dd>{schedule.title}</dd>
              </div>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">DATE</dt>
                <dd>{formattedDate}</dd>
              </div>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">VENUE</dt>
                <dd>{schedule.venue[0]}</dd>
              </div>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">枚数</dt>
                <dd>
                  <Select name="sheetCount" onValueChange={(value) => setSheetCount(value)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="枚数" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                </dd>
              </div>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">お名前</dt>
                <dd>
                  <Input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </dd>
              </div>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">フリガナ</dt>
                <dd>
                  <Input name="kana" type="text" value={kana} onChange={(e) => setKana(e.target.value)} />
                </dd>
              </div>
              <div className="flex gap-4 mb-4 items-start">
                <dt className="c-label">E-mail</dt>
                <dd>
                  <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </dd>
              </div>
            </dl>
            <button className="c-button" type="submit">
              予約
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
